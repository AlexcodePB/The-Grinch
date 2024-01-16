import cart from './assets/xmas.svg'
import { Box, Flex } from '@chakra-ui/react'

const CartWidget = () => {
    return(
        <Flex
        justifyContent={'center'}
        >
            <Box 
            pt={2}
            >
            <img src={cart} alt='cart-widget' 
            width={35}
            />
            </Box>
        </Flex>
    )
}
export default CartWidget