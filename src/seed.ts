import { prisma } from "./db"

const products = [
    {

        "name": "Wireless Mouse",
        "fileUrl": "https://example.com/products/wireless-mouse.jpg",
        "price": 799,
        "createdAt": "2026-08-01T10:00:00.000Z"
    },
    {

        "name": "Mechanical Keyboard",
        "fileUrl": "https://example.com/products/mechanical-keyboard.jpg",
        "price": 2499,
        "createdAt": "2026-08-02T11:15:00.000Z"
    },
    {

        "name": "USB-C Hub",
        "fileUrl": "https://example.com/products/usb-c-hub.jpg",
        "price": 1499,
        "createdAt": "2026-08-03T09:30:00.000Z"
    },
    {

        "name": "Laptop Stand",
        "fileUrl": "https://example.com/products/laptop-stand.jpg",
        "price": 999,
        "createdAt": "2026-08-04T14:20:00.000Z"
    },
    {

        "name": "Bluetooth Speaker",
        "fileUrl": "https://example.com/products/bluetooth-speaker.jpg",
        "price": 1899,
        "createdAt": "2026-08-05T16:45:00.000Z"
    },
    {

        "name": "Gaming Headset",
        "fileUrl": "https://example.com/products/gaming-headset.jpg",
        "price": 2799,
        "createdAt": "2026-08-06T08:10:00.000Z"
    },
    {

        "name": "Webcam HD",
        "fileUrl": "https://example.com/products/webcam-hd.jpg",
        "price": 1599,
        "createdAt": "2026-08-07T12:25:00.000Z"
    },
    {

        "name": "External SSD 512GB",
        "fileUrl": "https://example.com/products/external-ssd.jpg",
        "price": 4499,
        "createdAt": "2026-08-08T15:00:00.000Z"
    },
    {
        "name": "Portable Monitor",
        "fileUrl": "https://example.com/products/portable-monitor.jpg",
        "price": 8999,
        "createdAt": "2026-08-09T13:40:00.000Z"
    },
    {

        "name": "Wireless Charger",
        "fileUrl": "https://example.com/products/wireless-charger.jpg",
        "price": 699,
        "createdAt": "2026-08-10T17:30:00.000Z"
    }
]

async function main() {
    const result = await prisma.product.createMany({
        data: products,
        skipDuplicates: true,
    });

    console.log(`Seeded ${result.count} products`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });