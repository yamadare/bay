const express = require('express');
const router = express.Router();

const member = [
  {
    id: 1,
    name: '坂村 洋輔',
    age: 24,
    image: '/images/member/sakamura.PNG',
    instrument: 'tenor sax'
  },
  {
    id: 2,
    name: '坂村 洋輔',
    age: 24,
    image: '/images/member/sakamura.PNG',
    instrument: 'tenor sax'
  },
  {
    id: 3,
    name: '坂村 洋輔',
    age: 24,
    image: '/images/member/sakamura.PNG',
    instrument: 'tenor sax'
  },
  {
    id: 4,
    name: '坂村 洋輔',
    age: 24,
    image: '/images/member/sakamura.PNG',
    instrument: 'tenor sax'
  },
  {
    id: 5,
    name: '坂村 洋輔',
    age: 24,
    image: '/images/member/sakamura.PNG',
    instrument: 'tenor sax'
  },
]

router.get('/', (req, res, next) => {
  res.render('member', {member: member})
});

module.exports = router;
