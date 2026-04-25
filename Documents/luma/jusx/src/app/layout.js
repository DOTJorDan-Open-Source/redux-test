import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio and projects routing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}