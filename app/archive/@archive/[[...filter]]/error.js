"use client";

// use client를 작성하면 서버 및 클라이언트 사이드 양쪽에서 동작하게 된다.
// 오류는 서버말고 클라이언트에서도 발생하기에 use client를 작성해줘야 한다.
export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An Error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
