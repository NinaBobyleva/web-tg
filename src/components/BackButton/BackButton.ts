// import { useEffect } from "react";
// import { backButton } from "@telegram-apps/sdk-react";
// import { useNavigate } from "react-router-dom";

// export function BackButtonHandler() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!backButton.show.isAvailable()) return;

//     // Показываем кнопку "Назад"
//     backButton.show();

//     // Проверяем, был ли переход с внешнего сайта
//     const isReturningFromExternal = document.referrer.includes('ваш-внешний-сайт');

//     const handleBackButton = () => {
//       if (isReturningFromExternal) {
//         // Закрываем WebApp и возвращаем в Telegram
//         if (window.Telegram?.WebApp?.close) {
//           window.Telegram.WebApp.close();
//         } else {
//           // Fallback для браузера
//           navigate(-1);
//         }
//       } else {
//         // Обычное поведение в приложении
//         navigate(-1);
//       }
//     };

//     backButton.onClick(handleBackButton);

//     return () => {
//       backButton.offClick(handleBackButton);
//       backButton.hide();
//     };
//   }, [navigate]);

//   return null;
// }
