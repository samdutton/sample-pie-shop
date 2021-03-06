/**
 *
 *  Online store PWA sample.
 *  Copyright 2017 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
const fei = require('firestore-export-import');
fei.initializeApp(process.env.FB_KEYS,
  'https://firebase.corp.google.com/u/0/project/pie-shop-app/');

import categories from '../../data/categories';

function index(req, res) {
  fei.backup('home').then((data) => { // get data for home page content
    res.render('index', {
      categories: categories,
      homeCategories: data.home.categories.data,
      homeProducts: data.home.products.data,
      scripts: [
        '/js/index.js',
        '/js/lazy-img.js',
      ],

    });
  });
}

export default index;
