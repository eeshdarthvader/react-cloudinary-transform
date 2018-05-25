# React Cloudinary component

A simple react component to transform images through cloudinary

## Getting Started
Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Integrate cloudinary with your react application with this simple component by giving few important information like cloudName, transformations , image name, type of image uploading etc. and you are good to go
## Installation
NPM
Install the files using the following command. Use the optional --save parameter if you wish to save the dependency in your package.json file.
```
npm install react-cloudinary-transform --save
```
OR
```
yarn add react-cloudinary-transform
```

Setup

Include the javascript files in your code. For Example:

```
import Cloudinary from 'react-cloudinary-transform';
```

In order to properly use this library you have to provide it with a few configuration parameters.

```
import React from "react";
import { render } from "react-dom";
import Cloudinary from "react-cloudinary-transform";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Cloudinary
      alt="image"
      method="<type of upload>"
      uploadedFolder="<folder name in cloudinary>"
      cloudName="<your cloudName>"
      cname="res.cloudinary.com"
      transformation="w_325,h_243,f_auto,q_auto,c_fill,g_auto,fl_progressive"
      image="<absoulte image url>"
      relativeUrl="<relative image url>"
    />
  </div>
);

render(<App />, document.getElementById("root"));

```

## Required:

**alt**- The alternate text for image if not rendered

**method** - Type of image uploaded in cloudinary. It can be 'fetch' or 'upload'. 

**cloudName** - The cloudinary cloud name associated with your Cloudinary account.

**cname** - Please refer to Cloudinary Documentation for information on these 

## Optional parameters.

**uploadedFolder** - The folder name in cloudinary if you are using 'upload' method type

**transformation** - The images changes you want from cloudinary. See Image transformation reference(https://cloudinary.com/documentation/image_transformation_reference)

**image** - Absoulte image url

**relativeUrl** - Relative Image url in case of images are uploaded in a folder in cloudinary and method is 'upload'

## Additional resources
Additional resources are available at:

* Website (https://cloudinary.com/)
* Documentation (https://cloudinary.com/documentation)
* Image transformations documentation(https://cloudinary.com/documentation/image_transformation_reference)
* Support: You can open an issue through GitHub.



Stay tuned for updates, tips and tutorials: Blog, Twitter, Facebook.

## License
Released under the MIT license.