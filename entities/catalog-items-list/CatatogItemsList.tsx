import {useEffect} from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { useAtom } from 'jotai';
import { productsAtom, loadingProductsAtom } from '../../store/Produts';
import { CatalogItem } from '../catalog-item/CatalogItem';
import { CatalogItemProps } from '../catalog-item/CatalogItemProps';
import axios from 'axios';
import { CatalogItemListProps } from './CatalogItemListProps';
import { ItemNotFound } from '../item-not-found/ItemNotFound';


const CatalogItemsList = ({...props}: CatalogItemListProps) => {
  const [products, setProducts] = useAtom<CatalogItemProps[]>(productsAtom);
  const [loading, setLoading] = useAtom<boolean>(loadingProductsAtom);

  const { url } = props;

  useEffect( () =>  {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios Error:', error.message);
        } else {
          console.error('Неизвестная ошибка:', error);
        }
      };
    };
    fetchData();
  }, [url]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  if (!products) {
    return <ItemNotFound />
  };

  const containerHeight = Dimensions.get('window').height - 220;

  return (
    <View style={{ height: containerHeight }}>
      <FlatList
        contentContainerStyle={styles.catalogItemsList}
        initialNumToRender={20}
        removeClippedSubviews={false}
        scrollEnabled={true}
        data={products}
        numColumns={2}
        renderItem={({ item }) => <CatalogItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CatalogItemsList;


const styles = StyleSheet.create({
  catalogItemsList: {
    alignItems: 'center',
  },

});
