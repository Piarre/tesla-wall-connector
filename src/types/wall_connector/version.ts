export interface Version {
    /** Current firmware version installed */
    firmware_version: string;

    /** Current git branch */
    git_branch: string;

    /** Hardware part number */
    part_number: string;

    /** Wall Connector serial number */
    serial_number: string;

    /** Web service URI */
    web_service: string;
}
