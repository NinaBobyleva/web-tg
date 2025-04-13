import { useEffect } from "react";
import { backButton, useSignal } from "@telegram-apps/sdk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { paths } from "../../paths";

/**
 * Component which controls the Back Button visibility and behavior.
 */
export function BackButton() {
  const isVisible = useSignal(backButton.isVisible);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("The button is", isVisible ? "visible" : "invisible");
  }, [isVisible]);

  useEffect(() => {
    if (!backButton.show.isAvailable()) return;

    // Показываем кнопку "Назад"
    backButton.show();

    // Обработчик нажатия кнопки "Назад"
    const handleBackButton = () => {
      // Если текущий путь - страница обновления, возвращаем на предыдущую страницу
      if (location.pathname === paths.UPDATE) {
        navigate(-1); // Возврат на 1 шаг назад в истории
      } else {
        // Иначе переходим на страницу обновления
        navigate(paths.UPDATE);
      }
    };

    // Подписываемся на событие нажатия кнопки "Назад"
    backButton.onClick(handleBackButton);

    // Отписка и скрытие кнопки при размонтировании
    return () => {
      backButton.offClick(handleBackButton);
      backButton.hide();
    };
  }, [navigate, location.pathname]);

  return null;
}
