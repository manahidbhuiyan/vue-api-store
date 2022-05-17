import inventory from '../views/Inventory'
import itemDetails from "@/views/Item-details";
import Form from "@/views/Form";

export const routes = [
    {
        name: 'Inventory',
        path:'/',
        component: inventory
    },
    {
        name: 'Item-details',
        path:'/item/:id',
        component: itemDetails
    },
    {
        name: 'Form',
        path:'check-out',
        component: Form
    }
]