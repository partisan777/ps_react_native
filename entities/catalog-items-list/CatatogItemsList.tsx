import {useEffect, useState} from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Dimensions, Text } from 'react-native';
import { useAtom } from 'jotai';
import { productsAtom, loadingProductsAtom } from '../../store/Produts';
import { CatalogItem } from '../catalog-item/CatalogItem';
import { CatalogItemProps } from '../catalog-item/CatalogItemProps';
import { CatalogItemListProps } from './CatalogItemListProps';
import { ItemNotFound } from '../item-not-found/ItemNotFound';
import { useFetchProductData } from '@/shared/hooks/useFetchProductData';


const CatalogItemsList = ({...props}: CatalogItemListProps) => {
  const [product, setProduct] = useAtom<CatalogItemProps[]>(productsAtom);
  const [loading, setLoading] = useAtom<boolean>(loadingProductsAtom);
  const [error, setError] = useState(false);
  
  const { url } = props;

  useEffect( () =>  {
    useFetchProductData({url, setLoading, setProduct, setError})
  }, [url]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ошибка</Text>
      </View>
    );
  };

  if (!product) {
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
        data={product}
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
