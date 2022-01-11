# Ionic CMS
Using [ionic-users](https://github.com/microtrain/bootcamp/tree/main/16-Ionic/03-IonicUsers), [ng-cms](https://github.com/microtrain/bootcamp/blob/main/14-Angular/05-NgUsers/09-NextSteps.md), and the vanilla JavaScript CMS manager as a guide; build a CMS in Ionic5. 

## Based on Ionic 5.4.5
```sh
cd ~
ionic start ionicCMS sidemenu --type angular
```

## Authentication
We will start by providing an authentication mechanism. This will provide a service that gives us access to the login, logout, and register endpoints in the auth API. This will require the following assets.

```sh
ionic generate service auth
ionic generate page login
ionic generate page logout
ionic generate page register
```
## Add User Model
```sh
export class User{
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}
```
## Login
+ Add a login form
+ Add /ionicUsers to the subs section of your whitelist.
+ Test

## Logout
+ Provide a simple logout with a fall back to allow the user to retry the logout should the logout fail.
+ Redirect to '/login'
+ Test

## Register
+ Build a registration form.
+ Process user input.
+ Test

```sh
ionic generate page users

ionic generate service users

ionic generate page user

ionic generate page user-edit
```
## Add the ability to delete a user.
This may be its own page or a method built into another component.


## Add Article Model
```sh
export class Article {
    _id: string;
    title: string;
    slug: string;
    description: String;
    keywords: String;
    body: String;
    published: Date;
    created: Date;
    modified: Date;
    }
```

```sh
ionic generate page articles

ionic generate service articles

ionic generate page article

ionic generate page article-edit

ionic generate page article-create

```
## Add the ability to delete an article.
This may be its own page or a method built into another component.