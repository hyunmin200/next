import "./globals.css";

// 헤더 역활
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

// 페이지를 감싸는 포장지 느낌
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
