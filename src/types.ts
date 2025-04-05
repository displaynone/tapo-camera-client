export type LoginResponse = {
	result?: {
		stok?: string;
		data?: {
			nonce?: string;
			device_confirm?: string;
			code?: number;
			sec_left?: number;
			time?: number;
			max_time?: number;
			user_group?: string;
			start_seq?: number;
		};
		user_group?: string;
		start_seq?: number;
	};
	data?: {
		code?: number;
		sec_left?: number;
	};
	error_code?: number;
};

export type TapoConstructor = {
	host: string;
	user: string;
	password: string;
	cloudPassword?: string;
	superSecretKey?: string;
	childID?: string | null;
	reuseSession?: boolean;
	printDebugInformation?: boolean;
	controlPort?: number;
	retryStok?: boolean;
	redactConfidentialInformation?: boolean;
	streamPort?: number;
};

const TapoOnOff = ["on", "off"] as const;
export type TapoLEDStatus = (typeof TapoOnOff)[number];

export type TapoLED = {
	".name": string;
	".type": string;
	enabled: TapoLEDStatus;
};

export type TapoLEDConfig = {
	led: {
		config: TapoLED;
	};
};

export type TapoBasicInfo = {
	device_info: {
		basic_info: {
			device_type: string;
			device_model: string;
			device_name: string;
			device_info: string;
			hw_version: string;
			sw_version: string;
			device_alias: string;
			avatar: string;
			longitude: number;
			latitude: number;
			has_set_location_info: number;
			features: string;
			barcode: string;
			mac: string;
			dev_id: string;
			oem_id: string;
			hw_desc: string;
		};
	};
};

export type TapoPresetsInfo = {
	id: any[];
	name: any[];
	read_only: any[];
	position_pan: any[];
	position_tilt: any[];
};

export type TapoPresetsData = {
	preset: {
		preset: TapoPresetsInfo;
	};
};

export type TapoPresets = Record<string, string>;

export enum EncryptionMethod {
	MD5 = "md5",
	SHA256 = "sha256",
}

export type TapoTimeData = {
	system: {
		clock_status: {
			seconds_from_1970: number;
			local_time: string;
		};
	};
	timestamp?: number;
};

export type TapoVideoQuality = {
	stream_type: string;
	resolution: string;
	bitrate_type: string;
	frame_rate: string;
	quality: string;
	bitrate: string;
	name: string;
};

export type TapoVideoQualities = {
	video: Record<string, TapoVideoQuality>;
};

export type TapoVideoCapability = {
	encode_types: string[];
	frame_rates: string[];
	bitrates: string[];
	bitrate_types: string[];
	resolutions: string[];
	qualitys: string[];
};

export type TapoVideoCapabilities = {
	video_capability: Record<string, TapoVideoCapability>;
};

export type TapoLensMaskStatus = (typeof TapoOnOff)[number];

export type TapoLensMask = {
	lens_mask: {
		lens_mask_info: {
			enabled: TapoLensMaskStatus;
		};
	};
};
export type TapoMediaEncryptStatus = (typeof TapoOnOff)[number];

export type TapoMediaEncrypt = {
	cet: {
		media_encrypt: {
			enabled: TapoMediaEncryptStatus;
		};
	};
};

export type TapoTimezone = {
	timing_mode: string;
	timezone: string;
	zone_id: string;
};

export type TapoTimezoneData = {
	system: {
		basic: TapoTimezone;
	};
};

export type TapoFlipType = (typeof TapoOnOff)[number];
export type TapoRotateType = (typeof TapoOnOff)[number];
export type TapoLDC = (typeof TapoOnOff)[number];

export type TapoRotationStatus = {
	switch_mode: string;
	schedule_start_time: string;
	schedule_end_time: string;
	flip_type: TapoFlipType;
	rotate_type: TapoRotateType;
	ldc: TapoLDC;
};

export type TapoRotationStatusData = {
	image: {
		switch: TapoRotationStatus;
	};
};

export type TapoSDCardInfo = {
	disk_name: string;
	rw_attr: string;
	status: string;
	detect_status: string;
	write_protect: string;
	percent: string;
	type: string;
	record_duration: string;
	record_free_duration: string;
	record_start_time: string;
	loop_record_status: string;
	total_space: string;
	free_space: string;
	video_total_space: string;
	video_free_space: string;
	picture_total_space: string;
	picture_free_space: string;
	msg_push_total_space: string;
	msg_push_free_space: string;
};

export type TapoSDCardData = {
	harddisk_manage: {
		hd_info: Record<string, TapoSDCardInfo>[];
	};
};
