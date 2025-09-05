import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileCard from './Components/ProfileCard'; // Corrected to match your folder name

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <View style={{ marginBottom: 20 }}>
</View>
      <Image
        source={{ uri: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t1.15752-9/489826913_1110793150804518_9094606716627899179_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHxGLDsIf2tDWoQzOU72paTE7apqcAWXvATtqmpwBZe8OtO4i95lQb6MCYrMyfAmFP-KAKna7pkgffKAwBiL1sB&_nc_ohc=VZJTHcFIr6EQ7kNvwGOaL6b&_nc_oc=AdnUczKN_JBR4EofnB5bDSFSyniXOgvTGtb4NlUbx_L580K8DUljFzUh2YC3F4JVfaS7clYPlFMd05gOHuopPBz8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&oh=03_Q7cD3QGw1OOY1SW40Oe8pvkSEtAIAllMr7eMj60ObSOa4HW3ew&oe=68E25978" }}
        style={styles.avatar}
      />
      <StatusBar style="auto" />
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>200</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>35</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonText: {
    color: 'blue',
    marginTop: 20,
    fontSize: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555'
  },
});