/**
 * Cloudinary URL optimization helper
 * @param url The original Cloudinary URL
 * @param width Target width for the image
 * @returns Optimized URL with transformation parameters
 */
export function getOptimizedUrl(url: string, width = 1200, quality = 'auto'): string {
	if (!url || !url.includes('cloudinary.com')) return url;

	// Split the URL to insert transformations after /upload/
	// We handle both http and https as well as potential multiple /upload/ segments safely
	const parts = url.split('/upload/');
	if (parts.length !== 2) return url;

	const transformation = `w_${width},c_limit,q_${quality},f_auto`;
	return `${parts[0]}/upload/${transformation}/${parts[1]}`;
}
