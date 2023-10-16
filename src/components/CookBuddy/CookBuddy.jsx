import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CookBuddy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";

    document.head.appendChild(script);
    script.addEventListener("load", () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Cook Buddy",
        botConversationDescription:
          "This chatbot was built surprisingly fast with Botpress",
        botId: "92fdb352-7b94-4f96-8bd2-5da5f41a60ad",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "92fdb352-7b94-4f96-8bd2-5da5f41a60ad",
        lazySocket: true,
        botName: "Cook Buddy",
        frontendVersion: "v1",
        useSessionStorage: true,
        enableConversationDeletion: true,
        showPoweredBy: false,
        theme: "prism",
        themeColor: "#81df81",
      });

      window.botpressWebChat.onEvent(
        (event) => {
          console.warn(event.value);
          // Create a new shopping list
          if (event.value.hasRecipe && event.value.newShoppingList) {
            navigate(`/create-list`);
          }

          // Show the shopping lists page
          if (event.value.hasRecipe && event.value.updateExisting) {
            navigate(`/my-lists`);
          }
        },
        ["TRIGGER"]
      );
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};

export default CookBuddy;
