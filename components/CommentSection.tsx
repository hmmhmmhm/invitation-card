import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Spinner 컴포넌트
const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
  </div>
);

const apiKey = "v7wg34ng43y3893";

export default function CommentSection() {
  const [listCount, setListCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [newest, setNewest] = useState(true); // 추가된 상태

  const [list, setList] = useState<
    {
      created_at: string;
      ended_at: string;
      id: string;
      is_end: boolean;
      message: string;
      score: number;
      user_from: string;
      user_name: string;
    }[]
  >([]);
  const perPage = 10;

  const updateListCount = async () => {
    setLoading(true);
    try {
      await fetch(
        "https://invitation-card-api.up.railway.app/v1/invitation/count",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apiKey,
          }),
        }
      ).then(async (response) => {
        const count = Number(await response.text());

        if (Number.isNaN(count)) {
          console.error("Invalid count");
          setLoading(false);
          return;
        }

        setListCount(count);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    updateListCount();
  }, [currentPage]);

  const updateList = async () => {
    setLoading(true);
    try {
      await fetch(
        "https://invitation-card-api.up.railway.app/v1/invitation/list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            apiKey,
            count: perPage - 1,
            offset: (currentPage - 1) * perPage,
            newest,
          }),
        }
      )
        .then(async (response) => {
          const list = await response.json();

          if (!Array.isArray(list)) {
            console.error("Invalid list");
            setLoading(false);
            return;
          }

          setList(list.reverse());
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    updateList();
  }, [currentPage, newest]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();
    const affiliation = formData.get("affiliation")?.toString();
    const comment = formData.get("comment")?.toString();

    if (!name || name.length === 0) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!comment || comment.length === 0) {
      alert("메세지를 입력해주세요.");
      return;
    }

    console.log({ name, affiliation, comment });

    setLoading(true);
    try {
      fetch("https://invitation-card-api.up.railway.app/v1/invitation/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey,
          message: comment,
          score: 0,
          user_from: affiliation,
          user_name: name,
        }),
      }).then(async () => {
        setCurrentPage(1);
        setNewest(true);
        try {
          await updateListCount();
          await updateList();
        } catch (e) {
          console.log(e);
        }

        setLoading(false);
      });
      event.currentTarget?.reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      className="flex flex-col items-center w-full space-y-12 px-12 mb-24"
      aria-label="방명록 댓글 섹션"
    >
      {loading && createPortal(<Spinner />, document.body)}
      <div className="flex flex-row gap-3 text-3xl text-[#4A3C35] border-[#D4BDA2] border-b-[1px] pb-3 uppercase tracking-[0.188rem]">
        <p aria-label="방명록 댓글">GUEST BOOK</p>
      </div>

      {/* 정렬 버튼 추가 */}
      <div className="flex flex-row gap-4 text-3xl">
        <button
          className={`px-4 py-2 rounded-lg ${
            newest ? "bg-[#F78DA7] text-white" : "bg-white text-[#F78DA7]"
          }`}
          onClick={() => setNewest(true)}
        >
          최신순 정렬
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            !newest ? "bg-[#F78DA7] text-white" : "bg-white text-[#F78DA7]"
          }`}
          onClick={() => setNewest(false)}
        >
          점수순 정렬
        </button>
      </div>

      {/* 방명록 댓글 작성 */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center space-y-6"
      >
        <div className="w-full flex flex-col items-center space-y-2">
          <div className="w-full flex flex-row space-x-2">
            <input
              id="name"
              name="name"
              className="w-1/2 h-[3rem] p-8 text-3xl text-[#4A3C35] border-[#D4BDA2] border-[1px] rounded-lg"
              placeholder="이름을 입력해주세요."
            />
            <input
              id="affiliation"
              name="affiliation"
              className="w-1/2 h-[3rem] p-8 text-3xl text-[#4A3C35] border-[#D4BDA2] border-[1px] rounded-lg"
              placeholder="소속명 (선택사항)"
            />
          </div>
          <textarea
            id="comment"
            name="comment"
            className="w-full h-[10rem] p-6 text-3xl text-[#4A3C35] border-[#D4BDA2] border-[1px] rounded-lg"
            placeholder="방명록에 남겨주실 메세지를 부탁드립니다."
            style={{ whiteSpace: "pre-wrap" }} // 줄바꿈 허용
          />
        </div>
        <button
          type="submit"
          className="w-full h-[5rem] bg-gradient-to-br from-[#F78DA7] via-[#F78DA7] to-[#F78DA7] text-white font-bold shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative gap-2 text-3xl"
          aria-label="방명록 메세지 작성"
        >
          <span role="img" aria-label="댓글 아이콘" className="text-4xl">
            💬
          </span>
          <span className="text-3xl">방명록 메세지 남기기</span>
        </button>
      </form>

      {/* 방명록 댓글 리스트 (커뮤니티 댓글 시스템, 이름, 소속, 댓글 내용, 시간 표시, 페이지네이션은 1~5까지 표시, 이전다음 표시) */}
      <div className="w-full flex flex-col items-center space-y-6">
        <div className="w-full flex flex-col items-center space-y-6">
          {list.map((entry, index) => (
            <div key={index} className="w-full border-b border-[#D4BDA2] py-4">
              <div className="flex flex-row items-center text-3xl">
                <div className="flex justify-between w-full">
                  <div className="flex items-center">
                    <span className="font-bold">{entry.user_name}</span>
                    {entry.user_from && (
                      <>
                        <span className="mx-4 text-[#F68DA7]">/</span>
                        <span>{entry.user_from}</span>
                      </>
                    )}
                    {entry.score && (
                      <>
                        <span className="mx-4 text-[#F68DA7]">/</span>
                        <span>{entry.score}점</span>
                      </>
                    )}
                  </div>
                  <span>
                    {new Date(entry.created_at).toLocaleString("ko-KR")}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-4xl" style={{ whiteSpace: "pre-wrap" }}>
                {entry.message}
              </div>{" "}
              {/* 줄바꿈 허용 */}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row items-center justify-center space-x-4">
          <button
            className="w-[5rem] h-[5rem] bg-[#F78DA7] text-white font-bold text-3xl rounded-lg"
            aria-label="이전 페이지"
            onClick={() => {
              setCurrentPage((prev) => Math.max(1, prev - 5));
            }}
          >
            이전
          </button>
          {Array.from(
            { length: Math.min(5, Math.ceil(listCount / perPage)) },
            (_, i) => {
              const startPage = Math.max(
                1,
                Math.min(currentPage - 2, Math.ceil(listCount / perPage) - 4)
              );
              return startPage + i;
            }
          ).map((page) => (
            <button
              key={page}
              className={`w-[5rem] h-[5rem] ${
                page === currentPage
                  ? "bg-[#F78DA7] text-white"
                  : "bg-white text-[#F78DA7]"
              } font-bold text-3xl rounded-lg`}
              aria-label={`${page} 페이지`}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          ))}
          <button
            className="w-[5rem] h-[5rem] bg-[#F78DA7] text-white font-bold text-3xl rounded-lg"
            aria-label="다음 페이지"
            onClick={() => {
              setCurrentPage((prev) =>
                Math.min(Math.ceil(listCount / perPage), prev + 5)
              );
            }}
          >
            다음
          </button>
        </div>
      </div>
    </section>
  );
}
