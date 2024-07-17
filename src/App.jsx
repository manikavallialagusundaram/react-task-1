import React from 'react';
import Card from './Components/Card';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


  const cards = [
    {
      tag : 'FREE',
      title : '$0/month', 
      features: [
        {isIncluded : true , text : 'Single User'},
        {isIncluded : true , text :'50GB Storage'},
        {isIncluded : true , text : 'Unlimited Public Projects'},
        {isIncluded : true , text : 'Community Access'},
        {isIncluded : false , text : 'Unlimited Private Projects'},
        {isIncluded : false , text : 'Dedicated Phone Support'},
        {isIncluded : false , text : 'Free Subdomain'},
        {isIncluded : false ,text : 'Monthly Status Reports'},
      ],
 },
{ 
  tag : 'PLUS',
  title :'$9/month',
  features : [
    {isIncluded : true , text : '5 Users'},
    {isIncluded : true , text : '50GB Storage'},
    {isIncluded : true , text : 'Unlimited Public Projects'},
    {isIncluded : true , text : 'Community Access'},
    {isIncluded : true , text : 'Unlimited Private Projects'},
    {isIncluded : true , text : 'Dedicated Phone Support'},
    {isIncluded : true , text : 'Free Subdomain'},
    {isIncluded : false , text : 'Monthly Status Reports'},
   ],
 },
 {
  tag : 'PRO',
  title : '$49/month', 
  features : [
   {isIncluded : true , text : 'Unlimited Users'},
   {isIncluded : true , text : '150GB Storage'},
   {isIncluded : true , text : 'Unlimited Public Projects'},
   {isIncluded : true , text : 'Community Access'},
   {isIncluded : true , text : 'Unlimited Private Projects'},
   {isIncluded : true , text : 'Dedicated Phone Support'},
   {isIncluded : true , text : 'Unlimited Free Subdomain'},
   {isIncluded : true , text : 'Monthly Status Reports'},
  ],
 },
  ];

 const App = () => {
  return ( 
    <div className="app">
      {cards.map((Details,index) => (
        <Card key={index} Details={Details} />
      ))}
    </div>
  )
 }
export default App;
