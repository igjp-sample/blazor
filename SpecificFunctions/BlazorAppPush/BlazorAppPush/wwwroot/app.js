(function () {

    const applicationServerPublicKey = 'BJJpNlDugifqq-PmyA1v_Z3Bowiv2r5dO1zCqqBwWeHCqfBvXIFNjXgifxIOH3KkqXxAv5giaP11woKJStQrJys';

    window.PushNotifications = {
        isSupported: async () => {
            if ("Notification" in window)
                return true;
            return false;
        },
        askPermission: async () => {
            return new Promise((resolve, reject) => {
                Notification.requestPermission((permission) => {
                    resolve(permission);
                });
            });
        },
        requestSubscription: async () => {
            const worker = await navigator.serviceWorker.getRegistration();
            const existingSubscription = await worker.pushManager.getSubscription();
            if (!existingSubscription) {
                const newSubscription = await subscribe(worker);
            }
        },
        create() {
            var text = 'これはプッシュ通知テストです。';
            var notification = new Notification('プッシュ通知テスト', { body: text });
        }
    };

    async function subscribe(worker) {
        try {
            return await worker.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerPublicKey
            });
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                return null;
            }
            throw error;
        }
    }

})();
