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
    flex: 1,
    width: 330,
    height: 300,
    flexDirection: 'row',
    backgroundColor: COLORS.SEARCH_INPUT_GRAY,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 16,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RADIUSES.r16
  },
  searchImage: {
    height: 40,
    width: 40,
  },
  searchTextInput: {
    height: 40,
    width: 250,
    backgroundColor: COLORS.SEARCH_INPUT_GRAY,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    color: COLORS.TEXT_GRAY,
    fontSize: 14,
  },
});
