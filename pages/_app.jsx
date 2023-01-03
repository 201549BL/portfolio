import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { useForm } from "react-hook-form";
import Header from "../components/header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MyApp({ Component, pageProps }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  return (
    <>
      <ThemeProvider>
        <div className={`${inter.variable} font-sans`}>
          <Header
            toggleTheme={() => toggleScheme()}
            onContactClick={openDialog}
          />
          <main className="px-2">
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
