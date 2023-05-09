import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { LogoAlpj } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 items-center mt-10 space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#ffffff] text-3xl font-semibold">34</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">ALAPAJ</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#142252] text-[42px]">Enjoy the activities with ALAPAJ</Text>
        <Text className="text-[#ff733c] text-[38px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quis nostrum
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#000cf4] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={LogoAlpj}
          className="w-50 h-50 object-cover mt-8 ml-6"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#001bc9] rounded-full items-center justify-center mb-24"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#e15e01]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
