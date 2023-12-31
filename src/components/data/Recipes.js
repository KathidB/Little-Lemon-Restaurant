import GreekSalad from '../../assets/images/greeksalad.webp'
import Bruschetta from '../../assets/images/bruchetta.webp'
import LemonDesert from '../../assets/images/lemondessert.webp'

const recipesArray = [
  {
    id: 0,
    name: 'Greek Salad',
    price: '12.99$',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and croutons.',
    img: GreekSalad
  },
  {
    id: 1,
    name: 'Bruschetta',
    price: '5.99$',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    img: Bruschetta
  },
  {
    id: 2,
    name: 'Lemon Dessert',
    price: '5.00$',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: LemonDesert
  }
]

export default recipesArray
