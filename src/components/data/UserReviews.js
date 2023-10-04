import userOne from '../../assets/images/user1.jpg'
import userTwo from '../../assets/images/user2.jpg'
import userThree from '../../assets/images/user3.jpg'
import userFour from '../../assets/images/user4.jpg'

const UserReviews = [
  {
    id: 0,
    name: 'John',
    lastName: 'Doe',
    rate: 5,
    img: userOne,
    review:
      'The food was absolutely delicious, and the service was exceptional. I highly recommend this restaurant!'
  },
  {
    id: 1,
    name: 'Mary',
    lastName: 'Smith',
    rate: 4,
    img: userTwo,
    review:
      'I enjoyed the food, although the service was a bit slow. Overall, a good dining experience.'
  },
  {
    id: 2,
    name: 'Mark',
    lastName: 'Johnson',
    rate: 5,
    img: userThree,
    review:
      'This restaurant exceeded my expectations. The food was amazing, and the staff was friendly and attentive.'
  },
  {
    id: 3,
    name: 'Emily',
    lastName: 'Wilson',
    rate: 4,
    img: userFour,
    review:
      'I had a great time at this restaurant. The food was delicious, and the ambiance was lovely.'
  }
]

export default UserReviews
