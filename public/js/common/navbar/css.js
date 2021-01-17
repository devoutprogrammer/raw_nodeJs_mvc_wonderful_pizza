'use strict'
export default () => {
    return `<style>
    /* Style the top navigation bar */
    
    .navbar {
        /* display: flex; */
        overflow: hidden;
        background-color: #333;
        overflow: hidden;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 20;
        padding-top: 8px;
    }
    
    .humberger {
        width: 25px;
        height: 1px;
        background-color: white;
        margin: 3px 0;
    }
    
    .navbar a {
        border: none;
        color: whitesmoke;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
    }
    
    .navbar a:hover {
        background-color: #ddd;
        color: black;
    }
    
    .navbar a.active {
        background-color: #ddd;
        color: black;
    }
    
    
    /* Right-aligned link */
    
    .navbar a.right {
        float: right;
    }
    
    .navbar .icon {
        display: none;
    }
    
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
    }
    
    .sticky+.row {
        padding-top: 60px;
    }
    
    #cart {
        background-color: orange;
        border-radius: 90%;
        margin-right: 10px;
        z-index: 100;
        padding-bottom: 5px;
        padding-top: 3px;
    }
    
    #cart:hover {
        background-color: bisque;
    }
    
    #price {
        margin-right: 20px;
        background-color: teal;
        border-radius: 60%;
        margin-left: 0;
        /* padding-bottom: 1px; */
        padding-top: 8px;
        padding-bottom: 5px;
    }
    
    a#price:hover {
        color: orange;
        background-color: green;
    }
    
    #equal {
        margin-left: -10px;
    }
    
    a#equal:hover {
        background-color: #333;
        color: white;
        pointer-events: none;
    }
    
    .notification {
        background-color: #555;
        color: white;
        text-decoration: none;
        /* padding: 15px 26px; */
        position: relative;
        display: inline-block;
        border-radius: 2px;
        z-index: 150;
    }
    
    .notification:hover {
        background: red;
    }
    
    .notification .badge {
        position: absolute;
        top: -10px;
        right: -10px;
        padding: 5px 10px;
        border-radius: 50%;
        background-color: red;
        color: white;
        /* z-index: 200; */
    }
    .notification .badge:hover{
        background-color: green;
    } 
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    
    @media screen and (max-width: 600px) {
        .navbar a:not(:first-child) {
            display: none;
        }
        .navbar a.icon {
            float: right;
            display: block;
        }
    }
    
    @media screen and (max-width: 600px) {
        .navbar.responsive {
            position: relative;
        }
        .navbar.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
        }
        .navbar.responsive a {
            float: none;
            display: block;
            text-align: left;
        }
        .navbar {
            display: block;
        }
        .row {
            flex-direction: column;
        }
        .header {
            display: none;
        }
    }
    
    @media screen and (max-width: 700px) {
        .navbar {
            background-color: gray;
        }
    }

    a.user {
        display: none;
    }
    a.logout {
        display: none;
    }
    a.shipping {
        display: none;
    }
    a.billing {
        display: none;
    }
    a.dashboard {
        display: none;
    }
    a.payment {
        display: none;
    }
    a.equal, a.price, a.cart, a.badge{
        display: none;
    }
    /*
    .icon {
        display: none;
    }
    a.price, a.equal,a.cart {
        display: none;
    }
    .badge {
        display: none;
    }*/
    a.pay{
        color:bisque;
        display: none;
        border: 1px dotted orange;
    }
    </style>`
}