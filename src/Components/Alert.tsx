import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function AlertBar() {
    const icon = <IconHeart />;

    return (
        <Alert title="Alert title" mb={20} icon={icon} withCloseButton closeButtonLabel="Dismiss">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Alert>
    );
}

export default AlertBar;