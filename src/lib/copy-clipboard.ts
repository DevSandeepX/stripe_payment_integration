export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
        return true
    } catch (error) {
        console.error("Failed to copy:", error);
        return false
    }
};