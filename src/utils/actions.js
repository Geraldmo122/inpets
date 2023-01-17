import { getAuth, sendPasswordResetEmail} from "firebase/auth"
import { Alert } from 'react-native'

export const forgotPassword = (Email) => {
  const auth = getAuth();

  sendPasswordResetEmail(auth, Email, null)
      .then(() => {
        Alert.alert("Confirmación","Se le ha enviado un email con las instrucciones para cambiar la contraseña. " + Email);
      })
      .catch(function (e) {
        Alert.alert("Error","Este correo no está relacionado a ningún usuario.")
      });
};