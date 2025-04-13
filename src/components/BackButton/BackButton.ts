import { useEffect } from "react";
import { backButton, useSignal } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../paths";

/**
 * Component which controls the Back Button visibility.
 */
export function BackButton() {
  const isVisible = useSignal(backButton.isVisible);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("The button is", isVisible ? "visible" : "invisible");
  }, [isVisible]);

  useEffect(() => {
    if (backButton.show.isAvailable()) {
      backButton.show();
        navigate(paths.UPDATE);
    }
    return () => {
      backButton.hide();
    };
  }, [navigate]);

  return null;
}
