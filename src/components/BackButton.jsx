import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    return (
        <IconButton
            icon={<ArrowBackIcon />}
            colorScheme="blue"
            aria-label="Back to Home"
            size="md"
            isRound
            position="fixed"
            bottom="20px"
            left="20px"
            onClick={() => navigate("/")}
        />
    );
}

export default BackButton;
