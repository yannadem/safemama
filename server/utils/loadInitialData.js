import Product from "../models/Product.js";

const initialProducts = [
  {
    name: 'Paracetamol',
    safety: 'safe',
    notes: 'Safe for occasional use to reduce fever or pain.',
    source: 'https://www.natalben.com/el-embarazo-y-tus-dudas/embarazada-paracetamol-seguro',
  }, 
    {
    name: 'Ibuprofen',
    safety: 'unsafe',
    notes: 'Not recommended during pregnancy, especially in the third trimester.',
    source: 'https://www.natalben.com/el-embarazo-y-tus-dudas/embarazada-paracetamol-seguro',
  },
    {
    name: 'Sunscreen SPF 50',
    safety: 'safe',
    notes: 'Recommended to protect skin during pregnancy.',
    source: 'https://www.natalben.com/el-embarazo-y-tus-dudas/embarazada-paracetamol-seguro',
  }
];
 export async function loadInitialData () {
  try {
    const count = await Product.countDocuments();
    if(count === 0) {
      await Product.insertMany(initialProducts);
      console.log('initial products loaded into de database')
    } else {
      console.log('Datebae already has products')
    }

  } catch(error){
    console.log('Error', error)
  }
  
 }