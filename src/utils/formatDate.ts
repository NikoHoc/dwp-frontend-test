export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) return '-';

    return date.toLocaleDateString('id-ID', {
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    });
};