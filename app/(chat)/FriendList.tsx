import AppText from "@/component/AppText";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    img: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Ashish",
    finalMessage: "Ok Done",
    time: "11:45",
    unreadMessageCount: 1,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Dhruv",
    finalMessage: "Nothing much",
    time: "14:45",
    unreadMessageCount: 1,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Jaynil",
    finalMessage: "Chal to Maliye",
    time: "08:45",
    unreadMessageCount: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Pagu",
    finalMessage: "",
    time: "yesterday",
    unreadMessageCount: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Deep",
    finalMessage: "Call me",
    time: "Friday",
    unreadMessageCount: 0,
  },
  {
    img: "https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Aayush",
    finalMessage: "Kab Aarha",
    time: "07/21/2022",
    unreadMessageCount: 1,
  },
];
interface Friend {
  img: string;
  name: string;
  finalMessage: string;
  time: string;
  unreadMessageCount: number;
}

function FriendList() {
  const { colors } = useTheme();

  // Render function for each friend item
  const renderFriend: ListRenderItem<Friend> = React.useCallback(
    ({ item }) => (
      <EachFriend
        img={item.img}
        name={item.name}
        finalMessage={item.finalMessage}
        time={item.time}
        unreadMessageCount={item.unreadMessageCount}
      />
    ),
    []
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText size="xl" weight="bold">
            Chatx
          </AppText>
          <TouchableOpacity>
            <Feather name="settings" color={colors.border} size={24} />
          </TouchableOpacity>
        </View>
        <View style={[styles.searchContainer, { borderColor: colors.border }]}>
          <Feather name="search" color={colors.border} size={24} />
          <TextInput style={styles.searchInput} placeholder="Search Friend" />
        </View>
        <FlatList
          data={data}
          renderItem={renderFriend}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.friendList}
        />
      </View>
    </SafeAreaView>
  );
}

export default FriendList;
interface EachFriendType {
  img: string;
  name: string;
  finalMessage: string;
  time: string;
  unreadMessageCount: number;
}

const EachFriend = React.memo(
  ({ img, name, finalMessage, time, unreadMessageCount }: EachFriendType) => {
    return (
      <TouchableOpacity style={styles.container2}>
        <Image source={{ uri: img }} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <AppText size="lg" style={styles.nameText}>
            {name}
          </AppText>
          <AppText>{finalMessage}</AppText>
        </View>
        <View style={styles.timeContainer}>
          <AppText>{time}</AppText>
          {unreadMessageCount > 0 && (
            <View style={styles.unreadBadge}>
              <AppText color="white" size="sm">
                {unreadMessageCount}
              </AppText>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
  },
  friendList: {
    marginTop: 30,
  },
  container2: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 24,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    color: "#213241",
  },
  timeContainer: {
    alignItems: "flex-end",
    height: 50,
    justifyContent: "space-around",
  },
  unreadBadge: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#0573F3",
    justifyContent: "center",
    alignItems: "center",
  },
});
