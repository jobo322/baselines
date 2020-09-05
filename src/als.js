/**
 * Baseline correction with assymetric least squares,
 * followinfg Eilers and Boelens [1].
 *
 * It uses a Whittaker smoother. Additionally, it uses the idea
 * that a good baseline should only have deviations into the positive
 * direction, i.e. the peaks. This can be implemented with assymetric
 * least squares
 *
 * References:
 * [1] Eilers, P. H. C.; Boelens, H. F. M.
 * Baseline Correction with Asymmetric Least Squares Smoothing. 24.
 * http://static.tongtianta.site/paper_pdf/cdaed910-a7ca-11e9-a7c6-00163e08bb86.pdf
 * @export
 * @param {Array} spectrum
 * @param {number} [lambda=10] balance between smoothness penalty and fit error
 * @param {number} [p=0.05]
 * @param {number} [maxit=20]
 */
export function als(spectrum, lambda = 6, p = 0.05, maxit = 20) {}
