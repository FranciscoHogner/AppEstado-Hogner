import { useDispatch, useSelector } from "react-redux";

import CategoryGridItem from "../components/CategoryGridItem";
import { FlatList } from "react-native";
import React from "react";
import { selectCategory } from "../store/actions/category.action";
import { selectScore } from "../store/actions/score.action";

const HighscoreScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const highCategory = useSelector((state) => state.categories.list);

  const handleSelected = (item) => {
    dispatch(selectScore(item.id));
    navigation.navigate("ScoreDetails", { name: item.name });
  };
  const renderItem = ({ item }) => (
    <CategoryGridItem item={item} onSelected={handleSelected} />
  );
  return (
    <FlatList
      data={highCategory}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default HighscoreScreen;
