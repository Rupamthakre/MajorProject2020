

import { Injectable } from '@angular/core';

export interface HomeTab {
  title: string
};

export interface NotificationsCard {
  image: string,
  title: string,
  time: number
}

export interface Notification {
  all: Array<NotificationsCard>,
  deals: Array<NotificationsCard>,
  orders: Array<NotificationsCard>,
  others: Array<NotificationsCard>
}

export interface Product {
  name: string,
  image: Array<string>,
  size: string,
  color: string,
  cost_price: number,
  discount: number,
  offer: boolean,
  stock: number,
  description: string,
  currency: string,
  bought: number,
  shipping: number,
  rating: number,
  rating_count: number,
  store_rate: number,
  store_rating: number,
  store_rating_count: number,
  sold_by: string,
  specs: string,
  reviews: Array<Review>,
  store_reviews: Array<Review>,
  sizing: {
    small: number,
    okay: number,
    large: number
  },
  buyer_guarantee: string,
  sponsored: Array<Product>
}
export interface Review {
  image: string,
  name: string,
  comment: string,
  rating: number,
  images: Array<string>
}
export interface Cart {
  product: Product,
  quantity: number
}

export interface User {
  fname: string,
  lname: string,
  email: string,
  address: Array<Address>,
  billing: Array<any>,
  uid: string,
  did: string,
  aid: string
}

export interface Address {
  first_name: string,
  last_name: string,
  address_line_1: string,
  address_line_2: string,
  country: string,
  state: string,
  city: string,
  zipcode: number,
  phone_number: number
}

export interface Orders {
  product: Product,
  order_date: Date,
  id: string,
  amount: number,
  delivery_date: Date,
  status: string,
  billing_address: Address,
  shipping_address: Address,
  tax: number
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  terms_of_use = 'The Terms and Conditions agreement can act as a legal contract between you, the mobile app owner or developer, and the users of your app. Like a Terms and Conditions for a website, this agreement for a mobile app would set the rules and terms that users must follow in order to use your app.' +
    'Here are a couple of reasons why you\'ll want to have a Terms and Conditions for a mobile app:' +
    'You can stop abusive users from using your app.' +
    'You can terminate or block accounts at your sole discretion.' +
    'Liability to users will be limited.' +
    'And many more.' +
    'If you don\'t have this agreement for your mobile app yet, use the Generator to create it!';
  privacy_policy = 'You\'ll need the Privacy Policy agreement even if you don\'t collect any personal data yourself through the mobile app you\'re building, but instead use third party tools such as:' +
    '- Google Analytics Mobile' +
    '- Flurry' +
    '- Firebase' +
    '- Mixpanel' +
    'And so on' +
    'If you use at least one third party tool that might collect personal data through your mobile app, you need this agreement in place.' +
    'Each app store also requires you to have this agreement in place before submitting the mobile app:' +
    '- Apple App Store' +
    '- Google Play Store' +
    '- Microsoft Windows Phone Store'

  card: NotificationsCard = {
    image: 'assets/images/products/1.jpg',
    title: 'Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago',
    time: 9
  };

  notifications: Notification = {
    all: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
    deals: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
    orders: [],
    others: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
  }

  trending = [
    'Brinjals',
    'Cabbage',
    'Amul Milk',
    'Oranges',
    'Apples',
    'Tomotoes',
    'Butter',
    'Ghee',
    'Banana',
    'Graphes'
  ]

  tabs: Array<HomeTab> = [
    { title: 'Grocery' },
  { title: 'Vegetables' },
  { title: 'Fruits' },
  
  { title: 'MilkProduct'}
  
  ];

  item_tab: Array<HomeTab> = [{ title: 'Overview' },
  { title: 'Related' },
  { title: 'Product Reviews' },
  { title: 'Store Reviews' }];

  notifications_tab: Array<HomeTab> = [{ title: 'All' },
  { title: 'Deals' },
  { title: 'Your Orders' },
  { title: 'Other' }];

  rewards_tab: Array<HomeTab> = 
  [{ title: 'Dashboard' },
  { title: 'Redeem' },
  { title: 'Information' }];

  rewards = {
    points: 100,
    since: new Date(),
    available: [{ discount: 5, code: 'ABCDEF', expire: new Date(), expired: false }],
    used: [{ discount: 10, code: 'XEFGSD', expire: new Date(), expired: true }],
    redeem: [{ discount: 5, points: 200 }, { discount: 10, points: 600 }, { discount: 15, points: 1000 }]
  };

  sponsored: Array<Product> = [
    { name: 'Brinjal', cost_price: 40, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/brinjal1.jpg', 'assets/images/products/brinjal2.jpg', 'assets/images/products/brinjal3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/brinjal1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/brinjal1.jpg', 'assets/images/products/brinjal2.jpg'] }, { image: 'assets/images/products/brinjal3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/brinjal1.jpg'] }], store_reviews: [{ image: 'assets/images/products/brinjal2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/brinjal1.jpg', 'assets/images/products/brinjal2.jpg'] }, { image: 'assets/images/products/brinjal2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/brinjal1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Chillies', cost_price: 60, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/chillies1.jpg', 'assets/images/products/chillies2.jpg', 'assets/images/products/chillies3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], store_reviews: [{ image: 'assets/images/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg'] }, { image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Tomotoes', cost_price: 34, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/tomoto1.jpg', 'assets/images/products/tomoto2.jpg', 'assets/images/products/tomoto3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], store_reviews: [{ image: 'assets/images/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg'] }, { image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Cabbage', cost_price: 50, discount: 20, offer: true, stock: 69, description: 'sample data', image:  ['assets/images/products/cabbage1.jpg', 'assets/images/products/cabbage2.jpg', 'assets/images/products/cabbage3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Cauliflower', cost_price: 70, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/cauli1.jpg', 'assets/images/products/cauli2.jpg', 'assets/images/products/cauli3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Onions', cost_price: 101, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/onion1.jpg', 'assets/images/products/onion2.jpg', 'assets/images/products/onion3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    
  ];

  products_1: Array<Product> = [
    { name: 'Orange', cost_price: 120, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/orange1.jpg', 'assets/images/products/orange2.jpg', 'assets/images/products/orange3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/orange1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/orange1.jpg', 'assets/images/products/orange2.jpg'] }, { image: 'assets/images/products/orange3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/orange1.jpg'] }], store_reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg'] }, { image: 'assets/images/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Pineapple', cost_price: 190, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/pineapple1.jpg', 'assets/images/products/pineapple2.jpg', 'assets/images/products/pineapple3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/pineapple2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/pineapple2.jpg'] }], store_reviews: [{ image: 'assets/images/products/pineapple1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/pineapple2.jpg', 'assets/images/products/pineapple1.jpg'] }, { image: 'assets/images/products/pineapple2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Apple', cost_price: 118, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/apple1.jpg', 'assets/images/products/apple2.jpg', 'assets/images/products/apple3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/apple3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/apple3.jpg'] }], store_reviews: [{ image: 'assets/images/products/apple1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/apple1.jpg', 'assets/images/products/apple2.jpg'] }, { image: 'assets/images/products/apple3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Grapes', cost_price: 148, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/grape1.jpg', 'assets/images/products/grape2.jpg', 'assets/images/products/grape3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/grape1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/grape1.jpg'] }], store_reviews: [{ image: 'assets/images/products/grape2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/grape1.jpg', 'assets/images/products/grape2.jpg'] }, { image: 'assets/images/products/grape3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Banana', cost_price: 50, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/banana1.jpg', 'assets/images/products/banana2.jpg', 'assets/images/products/banana3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/banana2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/banana1.jpg'] }], store_reviews: [{ image: 'assets/images/products/banana2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/banana1.jpg', 'assets/images/products/banana2.jpg'] }, { image: 'assets/images/products/banana3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    ];
  products_2: Array<Product> = 
  [{ name: 'Sugar', cost_price: 68, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/sugar1.jpg', 'assets/images/products/sugar2.jpg', 'assets/images/products/sugar3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/sugar1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/sugar2.jpg'] }], store_reviews: [{ image: 'assets/images/products/sugar1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Rice', cost_price: 67, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/rice1.jpg', 'assets/images/products/rice2.jpg', 'assets/images/products/rice3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/rice1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/rice3.jpg'] }], store_reviews: [{ image: 'assets/images/products/rice2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Pulse', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/pulse1.jpg', 'assets/images/products/pulse2.jpg', 'assets/images/products/pulse3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/pulse1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/pulse1.jpg'] }], store_reviews: [{ image: 'assets/images/products/pulse3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Flour', cost_price: 78, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/flour1.jpg', 'assets/images/products/flour2.jpg', 'assets/images/products/flour3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 982, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/flour2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/flour2.jpg'] }], store_reviews: [{ image: 'assets/images/products/flour2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg'] }, { image: 'assets/images/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Oil', cost_price: 91, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/oil1.jpg', 'assets/images/products/oil2.jpg', 'assets/images/products/oil3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 214, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/oil3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/oil3.jpg'] }], store_reviews: [{ image: 'assets/images/products/oil2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg'] }, { image: 'assets/images/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  products_3: Array<Product> = 
  [{ name: 'Amul Milk', cost_price: 63, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/amul1.jpg', 'assets/images/products/amul2.jpg', 'assets/images/products/amul3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name:  'Butter', cost_price: 23, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/butter1.jpg', 'assets/images/products/butter2.jpg', 'assets/images/products/butter3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Ghee', cost_price: 178, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/ghee1.jpg', 'assets/images/products/ghee2.jpg', 'assets/images/products/ghee3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'MilkPowder', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/powder1.jpg', 'assets/images/products/powder2.jpg', 'assets/images/products/powder3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  { name: 'Cheese', cost_price: 138, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/cheese1.jpg', 'assets/images/products/cheese2.jpg', 'assets/images/products/cheese3.jpg'], rating_count: 11, store_rating_count: 11, currency: 'Rs.', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  

  cart:Array<Cart>=[{ product:this.products_1[2],quantity:5 }];

  recent = this.products_1;

  current_product: Product = this.products_1[0];

  current_user: User = {
    fname: 'Mr. Aniket',
    uid: 'ALSIOCSIIUAISUC',
    did: 'JIOU-ASBB-C871-0345',
    aid: 'ASBB-ASBB-C871-0345',
    lname: 'Jain',
    email: 'aniketjain13@gmail.com',
    billing: [{card_number:'3124',expiry_date:'12/22'},{card_number:'4564',expiry_date:'03/25'}],
    address: [{ address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
    { address_line_1: 'office', address_line_2: 'Office', city: 'Delhi', last_name: 'Holmes', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'Sherlock', state: 'Delhi' }]
  };

  wish_cash = {
    currency: 'Rs.',
    amount: 0.00,
    history: [{ amount: 10 }, { amount: 20 }]
  };

  orders: Array<Orders> = [{
    product: this.products_1[0],
    amount: 123,
    billing_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
    shipping_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
    delivery_date: new Date(),
    id: 'B102013526',
    order_date: new Date(),
    status: 'Delivered',
    tax: 40
  }, {
    product: this.products_2[0],
    amount: 123,
    billing_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
    shipping_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
    delivery_date: new Date(),
    id: 'B102013526',
    order_date: new Date(),
    status: 'Delivered',
    tax: 40
  }]

  faqs = {
    'Shipping and Delivery': [
      { 'How log does shipping take?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How can I track my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How much does shipping cost?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Where does my order ship from?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I change my shipping address?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'Returns and Refunds': [
      { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'Payment, Pricing & Promotions': [
      { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'Orders': [
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'Managing Your Account': [
      { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'User Feedback': [
      { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ],
    'Customer Support': [
      { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
      { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
    ]
  };
}
