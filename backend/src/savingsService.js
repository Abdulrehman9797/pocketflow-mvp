/**
 * PocketFlow Savings Velocity Engine
 * Calculates weekly net surplus and triggers recommendation logic under GDPR consent.
 */
async function calculateWeeklySavingsSuggestion(userId, weeklyIncome, weeklyExpenses, savingsConsent) {
    if (!savingsConsent) {
        return null; // Respect UK GDPR user consent preferences
    }

    const netSurplus = weeklyIncome - weeklyExpenses;
    const MINIMUM_SURPLUS_THRESHOLD = 50.00;
    const SAVINGS_ALLOCATION_RATIO = 0.20;

    if (netSurplus > MINIMUM_SURPLUS_THRESHOLD) {
        const suggestedAmount = parseFloat((netSurplus * SAVINGS_ALLOCATION_RATIO).toFixed(2));
        
        const suggestionRecord = await Database.Suggestion.create({
            userId: userId,
            suggestedAmount: suggestedAmount,
            reason: `Calculated from your weekly net surplus of £${netSurplus.toFixed(2)}`,
            status: 'PENDING',
            createdAt: new Date()
        });

        await NotificationService.dispatchPush(userId, suggestionRecord.suggestionId, suggestedAmount);
        return suggestionRecord;
    }
    return null;
}

module.exports = { calculateWeeklySavingsSuggestion };