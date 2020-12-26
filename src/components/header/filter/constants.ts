import { ORDER_FIELD } from "models/order-fields"

export const ORDER_OPTIONS = [
    {
        value: ORDER_FIELD.NAME,
        label: 'Name',
    },
    {
        value: ORDER_FIELD.RELEASED,
        label: 'Release data',
    },
    {
        value: ORDER_FIELD.ADDED,
        label: 'Popularity',
    },
    {
        value: ORDER_FIELD.RATING,
        label: 'Average rating',
    }
]