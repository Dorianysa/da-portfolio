import "./globals.css";

export const metadata = {
  title: "Portafolio de Dorianys Aponte",
  description: "Portafolio de Dorianys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
