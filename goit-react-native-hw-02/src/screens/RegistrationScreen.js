import { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Icon from "react-native-vector-icons/AntDesign";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
  });
};

const RegistrationScreen = () => {
  const [isShown, setIsShown] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [state, setstate] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setIsShown(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          //   style={styles.image}
          style={{
            ...styles.image,
            marginBottom: isShown ? -180 : 0,
          }}
          source={require("../images/bg.png")}
        >
          <View
            // style={styles.contentThumb}
            style={{
              ...styles.contentThumb,
              marginBottom: isShown ? 100 : 0,
            }}
          >
            <View style={styles.photoContainer}>
              <View style={styles.imageThumb}></View>
              <TouchableOpacity style={styles.imageBtn} activeOpacity={0.7}>
                <Icon
                  name="pluscircleo"
                  size={30}
                  color="#FF6C00"
                  margin="auto"
                />
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keybordContainer}
            >
              <View style={styles.form}>
                <Text
                  style={styles.pageTitle}
                  //   style={{
                  //     ...styles.pageTitle,
                  //     marginBottom: isShown ? 32 : 92,
                  //   }}
                >
                  Регистрация
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  onFocus={() => {
                    setIsFocus(true);
                    setIsShown(true);
                  }}
                  value={state.login}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, login: value }))
                  }
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 16 }}
                  placeholder="Адрес электронной почты"
                  onFocus={() => {
                    setIsFocus(true);
                    setIsShown(true);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <TextInput
                  style={{ ...styles.input, marginTop: 16, marginBottom: 43 }}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsFocus(true);
                    setIsShown(true);
                  }}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  onPress={keyboardHide}
                  activeOpacity={0.7}
                  style={styles.button}
                >
                  <Text style={styles.text}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{ ...styles.linkText, marginBottom: isShown ? 0 : 45 }}
              >
                Уже есть аккаунт? Войти
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  keybordContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  contentThumb: {
    position: "relative",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "67%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  photoContainer: {
    position: "absolute",
    top: "-10%",
    width: 132,
    height: 120,
  },
  imageThumb: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  imageBtn: {
    position: "absolute",
    right: "-5%",
    bottom: "10%",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  form: {
    flex: 0,
    width: "100%",
  },
  input: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
  },
  pageTitle: {
    alignSelf: "center",
    marginTop: 92,
    marginBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "Roboto-Regular",
  },
  button: {
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  text: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  linkText: {
    marginTop: 16,
    marginBottom: 66,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
});
