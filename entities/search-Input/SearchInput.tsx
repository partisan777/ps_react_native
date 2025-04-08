import { View, Image, TextInput, TextInputProps, StyleSheet } from "react-native";
import { COLORS, RADIUSES } from "../../common/CONSTANTS";
import { CustomInputProps } from "../../shared/input/CustomProps";


export function SearchInput({...props}: TextInputProps & CustomInputProps) {

    // console.log(typeof require('../../assets/search-normal.png'));

    const { onInputChange } = props;
    return (
        <View style={styles.searchContainer}>
          <Image
              source={require('../../assets/search-normal.png')}
              resizeMode="cover"
              style={styles.searchImage}
          />
          <TextInput
              style={styles.searchTextInput}
              placeholder={"Найти кофе"}
              onChangeText={onInputChange}
          />
        </View>
    );
};

const styles =  StyleSheet.create({
  searchContainer: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: COLORS.SEARCH_INPUT_GRAY,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RADIUSES.r16,
    marginVertical: 8,
  },
  searchImage: {
    height: 25,
    width: 25,
  },
  searchTextInput: {
    height: 30,
    width: 250,
    backgroundColor: COLORS.SEARCH_INPUT_GRAY,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 3,
    color: COLORS.TEXT_GRAY,
    fontSize: 14,
  },
});
