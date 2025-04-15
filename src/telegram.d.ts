declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initData: string;
          initDataUnsafe: {
            user?: {
              id: number;
              first_name?: string;
              last_name?: string;
              username?: string;
              language_code?: string;
            };
            query_id?: string;
          };
          CloudStorage?: {
            setItem: (key: string, value: string, callback?: (err?: string) => void) => void;
            getItem: (key: string, callback: (err?: string, value?: string) => void) => void;
            getItems: (callback: (err?: string, items?: Record<string, string>) => void) => void;
          };
          // Другие методы API, которые вы используете
          close: () => void;
          showPopup: (params: { title?: string; message: string; buttons?: Array<{ id?: string; type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'; text: string }> }) => void;
          // ...
        };
      };
    }
  }
  
  export {};