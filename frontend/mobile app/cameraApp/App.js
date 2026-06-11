import { useRef, useState } from "react";
import { Image, Button, Text, View, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  async function takePhoto() {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log("Photo taken:", data.uri);
        setPhoto(data.uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  }

  // Still loading permissions
  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  // Permission not granted
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need camera access to take photos</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  // Permission granted - show camera
  return (
    <View style={styles.container}>
      <CameraView 
        ref={cameraRef}
        style={styles.camera}
        facing="back"
      />
      <View style={styles.buttonContainer}>
        <Button title="Take Picture" onPress={takePhoto} />
      </View>
      {photo && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photo }} style={styles.preview} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  previewContainer: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  preview: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 20,
  },
});