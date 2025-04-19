import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import OrderScreenHeader from '@/entities/order-screen-header/OrderScreenHeader';
import { useEffect, useState } from 'react';
import { CatalogItemProps } from '@/entities/catalog-item/CatalogItemProps';
import { MAIN_URL } from '@/common/URL';
import axios from 'axios';
import { COLORS, RADIUSES } from '@/common/CONSTANTS';
import CustomLine from '@/shared/custo-line.tsx/CustomLine';
import { PRODUCT_SIZE } from '@/common/CONSTANTS';
import { CustomAnimatedButton } from '@/shared/button/CustomAnimatedButton';
import { sizeButtonList } from '@/models/ButtonList';
import { normalize } from '@/utils/utils';
import {Stack} from 'expo-router';
import { useFetchProductData } from '@/shared/hooks/useFetchProductData';

export default function ItemDetail({param}: any) {
	const { itemId } = useLocalSearchParams();
	const navigation = useNavigation();
	const [productSize, setProductSize] = useState<PRODUCT_SIZE>(PRODUCT_SIZE.M);
	const [product, setProduct] = useState<CatalogItemProps | null >(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState(false);

	const imageUrl = product?.image;
	const url = `${MAIN_URL}id/${itemId}`
	useEffect(() =>  {
		useFetchProductData({url, setLoading, setProduct, setError})
	  }, []);

	return (
		<>
		<Stack.Screen options={{ headerShown: false }} />
		<OrderScreenHeader
				title={'Описание'}
				img={require('../../assets/arrow-left.png')}
				onPress={() => navigation.goBack()}
			/>
		<View style={styles.itemDetailMainContainer}>
			<Text>{loading ? 'Загружаю данные' : ''}</Text>
			<Text>{error ? 'Ошибка' : '' }</Text>
			<View style={styles.itemDetailMainImgContainer}>
				<Image style={styles.itemDetailMainImg} source={{uri: imageUrl}} resizeMode='stretch'/>
			</View>
			<View style={styles.itemDetailLabelMainContainer}>
				<View style={styles.itemDetailLabelContainer}>
					<Text style={styles.itemDetailLabelMainText}>{product?.name}</Text>
					<Text style={styles.itemDetailLabelText}>{product?.subTitle}</Text>
				</View>
				<View style={styles.itemDetaiRatingContainer}>
					<Image style={styles.itemDetaiRatingContainerImg} source={require('../../assets/star.png')} resizeMode='cover'/>
					<Text style={styles.itemDetaiRatingContainerText}>{product?.rating}</Text>
				</View>
			</View>
			<CustomLine {...styles.smallUnderLine} />
			<View style={styles.itemDetailDescriptionContainer}>
				<Text style={styles.itemDetailDescriptionTitle}>{'Описание'}</Text>
				<Text style={styles.itemDetailDescriptionSubTitle}>{product?.description}</Text>
			</View>
			<View style={styles.itemDetailSIzeButtonsContainer}>
				{
					sizeButtonList.map((item) => {
						return  <CustomAnimatedButton
									key={item.id}
									title={item.type}
									viewStyle={[ styles.itemDetailSizeViewButton, productSize === item.type ? styles.itemDetailSizeViewButtonIsActive : {} ]}
									textStyle={[ styles.itemDetailSizeTextButton, productSize === item.type ? styles.itemDetailSizeTextButtonIsActive : {} ]}
									onPressIn={() => { setProductSize(item.type) }}
								/>
					})
				}
			</View>
			<View style={styles.itemDetailFooterContainer}>
				<View style={styles.itemDetailFooterPriceContainer}>
					<Text style={styles.itemDetailFooterPriceLabel}>{'Цена'}</Text>
					<Text style={styles.itemDetailFooterPriceAmount}>{`${product?.price} ₽`}</Text>
				</View>
				<CustomAnimatedButton
					title={'В корзину'}
					viewStyle={styles.itemDetailFooterPriceButtonView}
					textStyle={styles.itemDetailFooterPriceButtonText}
				/>
			</View>
		</View>
		</>
	);
};



export const layout = {
	meta: {
	  headerShown: false,
	},
};


const styles = StyleSheet.create({
	itemDetailMainContainer: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: 30,
		flexDirection: 'column',
	},
	itemDetailMainImgContainer: {
		maxWidth: 315,
		maxHeight: 206,
		marginBottom: 15,

	},
	itemDetailMainImg: {
		flex: 1,
		width: 315,
		height: 205,
		borderRadius: RADIUSES.r16,
	},
	smallUnderLine: {
		height: 1,
		backgroundColor: COLORS.TAB_BAR_LIGHT_GRAY,
	},
	itemDetailLabelMainContainer: {
		paddingTop: 5,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flexDirection: 'row',
		maxHeight: 35,
		width: '100%',
		marginBottom: 30,
	},
	itemDetailLabelContainer: {
		gap: 8,
	},
	itemDetailLabelMainText: {
		fontFamily: 'Sora',
		fontWeight: 600,
		fontSize: 20,
		color: COLORS.DARK_BROWN,

	},
	itemDetailLabelText: {
		fontFamily: 'Sora',
		fontWeight: 400,
		fontSize: 12,
		color: COLORS.TEXT_GRAY3,

	},
	itemDetaiRatingContainer: {
		width: 50,
		height: 25,
		flexDirection: 'row',
		gap: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemDetaiRatingContainerText: {
		fontFamily: 'Sora',
		fontWeight: 600,
		fontSize: normalize(16),
		color: COLORS.DARK_BROWN,
	},
	itemDetaiRatingContainerImg: {
		width: 20,
		height: 20,
	},
	itemDetailDescriptionContainer: {
		gap: 10,
		width: '100%',
		marginBottom: 15,
	},
	itemDetailDescriptionTitle: {
		fontFamily: 'Sora',
		fontWeight: 600,
		fontSize: 16,
		color: COLORS.DARK_BROWN,
	},
	itemDetailDescriptionSubTitle: {
		fontFamily: 'Sora',
		fontWeight: 400,
		fontSize: 14,
		color: COLORS.TEXT_GRAY3,
	},
	itemDetailSIzeButtonsContainer: {
		gap: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	itemDetailSizeViewButton: {
		width: 96,
		height: 43,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: COLORS.TAB_BAR_LIGHT_GRAY,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemDetailSizeTextButton: {
		fontFamily: 'Sora',
		fontWeight: 400,
		fontSize: normalize(14),
	},
	itemDetailSizeViewButtonIsActive: {
		borderColor: COLORS.BROWN_LIGHT,
		backgroundColor: COLORS.SIZ_BUTTON_OPACITY,
	},
	itemDetailSizeTextButtonIsActive: {
		color: COLORS.BROWN_LIGHT,
	},
	itemDetailFooterContainer: {
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		width: '100%',
		flex: 1,
		paddingBottom: 15,
	},
	itemDetailFooterPriceContainer: {
		justifyContent: 'space-between',
		height: 63,
		alignItems: 'stretch',
	},
	itemDetailFooterPriceLabel: {
		fontFamily: 'Sora',
		fontWeight: 400,
		fontSize: 14,
		color: COLORS.TEXT_GRAY3,
	},
	itemDetailFooterPriceAmount: {
		fontFamily: 'Sora',
		fontWeight: 600,
		fontSize: 18,
		color: COLORS.BROWN_LIGHT,
	},
	itemDetailFooterPriceButtonView: {
		width: 217,
		height: 62,
		borderRadius: RADIUSES.r16,
		backgroundColor: COLORS.BROWN_LIGHT,
		alignItems: 'center',
		justifyContent: 'center',
	},
	itemDetailFooterPriceButtonText: {
		fontFamily: 'Sora',
		fontWeight: 600,
		fontSize: 16,
		color: COLORS.WHITE,
	},

})