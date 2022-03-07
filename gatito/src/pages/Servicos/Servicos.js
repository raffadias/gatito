import React from 'react';
import { FlatList} from 'react-native';
import Item from './Item/Item';

const servicos = [
    {
      id: 1,
      nome: 'Banho',
      preco: 79.9,
      descricao: 'NÂO DÊ BANHO NO SEU GATO! Mas se precisar nós damos.'
    },
    {
      id: 2,
      nome: 'Vacina V4',
      preco: 89.9,
      descricao: 'Uma dose da vacina V4. Seu gato precisa de duas.'
    },
    {
      id: 3,
      nome: 'Vacina Antirrábica',
      preco: 99.9,
      descricao: 'Uma dose da vacina Antirrábica. Seu gato precisa de uma por ano.'
    },
  ];

export default function Servicos(){
    return (
        <>
        <FlatList
        data={servicos}
        removeClippedSubviews={false}
        renderItem={({item}) => <Item {...item}/>}
        keyExtractor={({id}) => String(id)}
        />
        </>
    )
}