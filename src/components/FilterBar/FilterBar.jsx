import { Checkbox, CheckboxGroup, HStack, Select } from '@chakra-ui/react'
import React from 'react'

export const FilterBar = ({ filter, setFilter }) => {
 return (
        <HStack mb={4} spacing={4} margin={4} >
            <CheckboxGroup value={filter} onChange={setFilter} defaultValue={['all']}>
                <Checkbox colorScheme='red' color='white'  value='all'>Todas los delitos</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Asalto'>Asalto</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Secuestro'>Secuestro</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Homicidio'>Homicidio</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Trafico de drogas'>Trafico de drogas</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Desaparición forzada'>Desaparición forzada</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Extorsión'>Extorsión</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Acoso'>Acoso</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Violencia doméstica'>Violencia doméstica</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Amenazas'>Amenazas</Checkbox>
                <Checkbox colorScheme='red' color='white' value='Violación'>Violación</Checkbox>
            </CheckboxGroup>
        </HStack>
    )
}
