import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    es: {
      translation: {
        wizard: {
          title: "Crea tu Password Manager",
          cancelBtn: "Cancelar",
          nextBtn: "Siguiente",
          submitBtn: "Enviar",
          noPassword: "Introduce la contraseña",
          confirmPassword: "Confirma la contraseña",
          invalidPassword: "Contraseña no válida",
          differencePassword: "La contraseña no coincide",
          clueLong: "La pista es demasiado larga",
          accessBtn: "Acceder",
        },
        step1: {
          brainDescription:
            "Guarda aquí todos tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicacines no protegidas",
          lockDescription:
            "Crea tu clave maestra; solo tú podrás acceder a tus secretos con ella",
          howWorks: {
            title: "Cómo funciona",
            description:
              "En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, asi que recérdala bien.",
          },
          saveData: {
            title: "Qué datos puedes guardar",
            description:
              "Por ejemplo, el número de tu tarjeta, el PIN, y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro",
          },
        },
        step2: {
          description:
            "En primer lugar, debes crear una contraseña diferente para sus pertencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.",
          passwordTitle: "Crear tu contraseña maestra",
          confirmPasswordTitle: "Repite tu contraseña maestra",
          password: "Contraseña",
          confirmPassword: "Repite tu contraseña",
          description2:
            "También puedes crear una pista que te ayude a recordar tu contraseña maestra.",
          clueTitle: "Crea tu pista para recordar tu contraseña (opcional):",
          clue: "Introduce tu pista",
        },
        step3: {
          OK: {
            title: "¡Tu Password Manager ya está creado!",
            description: "Prueba terminada, ¡olé!",
          },
          KO: {
            title: "Ha habido un error",
            description:
              "No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde",
          },
        },
      },
    },
  },
});
