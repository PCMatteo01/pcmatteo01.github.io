import type { Lang } from '../i18n/ui';

type L10n = Record<Lang, string>;

export interface CodeSample {
  file: string;
  /** how much of the file is mine, from git blame on the project repository */
  credit: L10n;
  note: L10n;
  code: string;
}

// Excerpts from the real files, trimmed for the page. Keyed by project, then by the index of the detail section they belong to.
export const detailCode: Record<string, Record<number, CodeSample>> = {
  normandia: {
    0: {
      file: 'GameModeManager.cs',
      credit: { en: '169 lines', it: '169 righe' },
      note: {
        en: 'The platform is detected once, remembered, and only then the right player prefabs and logic groups are switched on.',
        it: 'La piattaforma viene riconosciuta una volta sola, ricordata, e solo dopo si attivano i prefab e i gruppi di logica giusti.',
      },
      code: `[DefaultExecutionOrder(-100)]
public class GameModeManager : MonoBehaviour
{
    public PlatformTarget currentPlatform = PlatformTarget.VR;
    public GameMode currentMode = GameMode.ActionFPS;

    private void Awake()
    {
        if (!overrideWithInspector)
        {
            AutoDetectPlatform();
            LoadPrefsIfAvailable();
        }
        ApplyGameModeState();
    }

    private void AutoDetectPlatform()
    {
        if (PlayerPrefs.HasKey(PREF_PLATFORM)) return;

        var xr = XRGeneralSettings.Instance?.Manager;
        currentPlatform = (xr != null && xr.activeLoader != null)
            ? PlatformTarget.VR
            : PlatformTarget.PC;

        PlayerPrefs.SetInt(PREF_PLATFORM, (int)currentPlatform);
    }
}`,
    },
    1: {
      file: 'GarandClipMechanics.cs',
      credit: { en: '197 lines', it: '197 righe' },
      note: {
        en: 'The clip can only be inserted or removed while the slide is held back, and when the last round is fired the empty clip is thrown out with its "ping".',
        it: 'La clip entra o esce solo con l\'otturatore tenuto indietro, e dopo l\'ultimo colpo la clip vuota viene espulsa con il suo "ping".',
      },
      code: `private bool EvaluateFilter(object interactor, object interactable)
{
    if (magazineSocket != null && interactor == (object)magazineSocket)
    {
        if (magazineSocket.hasSelection && magazineSocket.interactablesSelected[0] == interactable)
            return true;

        return slideInteractable != null
            && (slideInteractable.isLockedBack || slideInteractable.SlideProgress > 0.9f);
    }
    return true;
}

private void CheckForEjection()
{
    if (weaponCore.MagazineAmmo <= 0 && magazineSocket.hasSelection)
        Invoke(nameof(EjectEmptyClip), 0.15f);
}

private void EjectEmptyClip()
{
    // ...cancel the selection, play the sound, then:
    GameObject emptyMag = Instantiate(emptyMagazinePrefab, pos, rot);
    rb.AddForce(transform.up * 4f, ForceMode.Impulse);
    rb.AddTorque(Random.insideUnitSphere * 2f, ForceMode.Impulse);
}`,
    },
  },
  lastgunner: {
    0: {
      file: 'ITurretController.cs · TurretShooting.cs',
      credit: { en: '128 of 149 lines mine', it: '128 righe su 149 mie' },
      note: {
        en: 'PC and VR both implement the interface; the shooting code only talks to it, so fire rate, spread and recoil are the same on both.',
        it: 'PC e VR implementano entrambi l\'interfaccia; il codice di sparo parla solo con quella, quindi cadenza, dispersione e rinculo sono uguali.',
      },
      code: `public interface ITurretController
{
    bool IsReloading { get; }
    int LoadedRounds { get; }
    bool TryConsumeAmmo();
    void Recoil();
}

void ProcessFiring()
{
    if (!isFiring) return;
    if (Time.time - lastFireTime < 60 / fireRate) return;

    if (controller.TryConsumeAmmo())
    {
        lastFireTime = Time.time;
        float spread = isAiming ? adsSpread : hipFireSpread;
        float x = Random.Range(-spread, spread);
        float y = Random.Range(-spread, spread);
        Quaternion rot = barrel.rotation * Quaternion.Euler(x, y, 0f);

        Instantiate(bulletPrefab, barrel.position, rot);
        controller.Recoil();
    }
}`,
    },
    5: {
      file: 'VRLinearDrive.cs',
      credit: { en: '173 lines', it: '173 righe' },
      note: {
        en: 'The turret\'s cocking slide: the hand is projected onto a line, turned into a 0 to 1 value, and the slide springs back when released.',
        it: 'Lo scorrimento di armamento della torretta: la mano viene proiettata su una linea, trasformata in un valore da 0 a 1, e al rilascio lo scorrevole torna indietro.',
      },
      code: `void UpdateLinearMapping(Vector3 handPosition)
{
    Vector3 heading = (endPoint.position - startPoint.position).normalized;

    // project the hand onto the line between the two points
    float dotP = Vector3.Dot(handPosition - startPoint.position, heading);
    dotP = Mathf.Clamp(dotP, 0f, length);

    SetLinearMapping(dotP / length);   // 0..1
}

void Update()
{
    // let go: slide back to the start
    if (!isGrabbed && returnToStart && currentLinearMapping > 0.001f)
        SetLinearMapping(Mathf.MoveTowards(currentLinearMapping, 0f, returnSpeed * Time.deltaTime));
}`,
    },
  },
};
