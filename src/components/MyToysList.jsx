import { Button, Table } from 'flowbite-react';
import { HiBan } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MyToysList = ({ toy, handleDelete }) => {



    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img className=' w-40 rounded-lg' src={toy.photo} alt="" />
            </Table.Cell>
            <Table.Cell>
                {toy.productName}
            </Table.Cell>
            <Table.Cell>
                {toy.brand}
            </Table.Cell>
            <Table.Cell className=' pl-10'>
                {toy.ratings}
            </Table.Cell>
            <Table.Cell>
                {toy.category}
            </Table.Cell>
            <Table.Cell>
                $ {toy.price}
            </Table.Cell>
            <Table.Cell>
                <Link to={`/updateToy/${toy._id}`}><Button gradientDuoTone="purpleToBlue" className='bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900'>update</Button></Link>
            </Table.Cell>
                <Table.Cell className="!p-4">
                <button onClick={() => handleDelete(toy._id)}><HiBan title='Delete' className=' text-4xl text-orange-400 hover:text-red-600' /></button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyToysList;