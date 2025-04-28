import '@getcronit/pylon';

declare module '@getcronit/pylon' {
    interface Bindings {
        DATABASE_URL: string;
        DIRECT_URL;
    }

    interface Variables {
        db: any;
    }
}
